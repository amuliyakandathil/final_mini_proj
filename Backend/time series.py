from pymongo import MongoClient
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['mini_project']

# Retrieve data from collections
time_med1_data = pd.DataFrame(list(db.time_med1.find({}, {'_id': 0, 'id': 1, 'time': 1, 'Medicine ID': 1})))
medicine_data = pd.DataFrame(list(db.medicine.find({}, {'_id': 1, 'Medicine ID': 1, 'Frequency': 1, 'Time of the day': 1, 'Start Date': 1, 'End Date': 1, 'Medication Name': 1})))

# Convert date/time fields to datetime
time_med1_data['time'] = pd.to_datetime(time_med1_data['time'])
medicine_data['Start Date'] = pd.to_datetime(medicine_data['Start Date'])
medicine_data['End Date'] = pd.to_datetime(medicine_data['End Date'])

# Get the first entry in time_med1, assuming all entries have the same Medicine ID
first_entry_time_med1 = time_med1_data.iloc[0]
med_id = first_entry_time_med1['Medicine ID']

# Retrieve End Date and Time of the day from medicine collection for the corresponding Medicine ID
medicine_entry = medicine_data[medicine_data['_id'] == med_id].iloc[0]

# Store End Date and Time of the day
end_date = medicine_entry['End Date']
time_of_day = pd.to_datetime(medicine_entry['Time of the day']).time()

# Get the current system date
current_date = pd.to_datetime(datetime.now().date())

# Get unique times from time_med1_data
unique_times = time_med1_data['time'].dt.time.unique()

# Function to convert time to fractional hours since midnight
def time_to_fractional_hours(t):
    return t.hour + t.minute / 60.0

# Prepare data for plotting
plot_data = []

# Iterate over each unique time and check if it exists in time_med1_data
for time_val in unique_times:
    time_data = time_med1_data[time_med1_data['time'].dt.time == time_val]
    if len(time_data) > 0:
        plot_data.extend([(date, time_to_fractional_hours(time_val)) for date in time_data['time']])
    else:
        plot_data.append((current_date, time_to_fractional_hours(time_val)))

# Unzip plot_data into x and y arrays
x_values, y_values = zip(*plot_data)

# Sort x and y values by x (date)
x_values, y_values = zip(*sorted(zip(x_values, y_values)))

# Plotting doses taken and missed over time
plt.figure(figsize=(12, 8))

# Identify missed dates
all_dates = pd.date_range(start=medicine_data['Start Date'].min(), end=current_date, freq='D')
missed_dates = set(all_dates.map(lambda x: x.date())) - set(x.date() for x in x_values)

# Plot missed doses as red crosses on the y-axis at time_of_day
for date in missed_dates:
    if pd.to_datetime(date) not in x_values:
        plt.scatter(pd.to_datetime(date), time_to_fractional_hours(time_of_day), marker='x', color='red')

# Plotting the data points and lines connecting them
for i in range(1, len(x_values)):
    plt.plot([x_values[i-1], x_values[i]], [y_values[i-1], y_values[i]], color='gray', linestyle='-', linewidth=1)

# Connect the last blue dot to the last red dot
if len(x_values) > 0 and len(missed_dates) > 0:
    last_blue_dot_date = x_values[-1]
    last_blue_dot_time = y_values[-1]
    last_missed_date = max(missed_dates)  # Assuming you want to connect to the latest missed date
    plt.plot([last_blue_dot_date, last_missed_date], [last_blue_dot_time, time_to_fractional_hours(time_of_day)], color='gray', linestyle='-', linewidth=1)

# Plot the first point separately to avoid a line from the first missed dose
plt.scatter(x_values[0], y_values[0], color='blue', marker='o')

# Plot the rest of the points
plt.scatter(x_values[1:], y_values[1:], color='blue', marker='o')

# Set up y-axis with all possible times
plt.yticks([time_to_fractional_hours(t) for t in unique_times], [t.strftime('%H:%M') for t in unique_times], rotation=0)

# Set x-axis limits to start date of medication to current date
plt.xlim(medicine_data['Start Date'].min() - timedelta(days=1), current_date + timedelta(days=1))

plt.xlabel('Date')
plt.ylabel('Time of the day')
plt.title('Medication Doses Over Time')
plt.grid(True)
plt.tight_layout()

# Remove legend if any
#plt.legend().remove()

plt.show()

