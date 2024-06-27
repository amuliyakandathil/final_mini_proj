from pymongo import MongoClient
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import OneHotEncoder
from collections import defaultdict

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['appointment']  # Replace 'appointment' with your database name
collection = db['appointment']  # Replace 'appointment' with your collection name

# Query all appointments
cursor = collection.find({})

# Extract appointment data into a list of dictionaries
appointments = list(cursor)

# Dictionary to count appointments by day
appointment_counts = defaultdict(int)

for appointment in appointments:
    day = appointment['day']
    appointment_counts[day] += 1

# Close MongoDB connection
client.close()

# Convert dictionary to lists for regression analysis
days = list(appointment_counts.keys())
counts = list(appointment_counts.values())

# Map days to numerical values (Monday=1, Tuesday=2, ..., Friday=5, Saturday=6, Sunday=7)
day_to_num = {
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
    'Sunday': 7
}

# Convert days to numerical values
days_numeric = [day_to_num[day] for day in days]

# Convert to numpy arrays
X = np.array(days_numeric).reshape(-1, 1)
y = np.array(counts)

# Fit linear regression model
model = LinearRegression()
model.fit(X, y)

# Predict appointments counts for each day
predicted_counts = model.predict(X)

# Find the day with the highest predicted appointment count
predicted_max_index = np.argmax(predicted_counts)
highly_booked_day = days[predicted_max_index]

print(f"Predicted highly booked day: {highly_booked_day}")

# Reconnect to MongoDB for querying appointments for the highly booked day
client = MongoClient('mongodb://localhost:27017/')
db = client['appointment']
collection = db['appointment']

# Query appointments for the highly booked day
cursor = collection.find({'day': highly_booked_day})

# Extract appointment times into a list
appointments = list(cursor)
times = [appointment['time'] for appointment in appointments]

# Count occurrences of each time
appointment_counts = defaultdict(int)
for time in times:
    appointment_counts[time] += 1

# Convert dictionary to lists for regression analysis
times = list(appointment_counts.keys())
counts = list(appointment_counts.values())

if len(times) == 0:
    print(f"No times available for appointments on {highly_booked_day}.")
else:
    # One-hot encode times
    encoder = OneHotEncoder(sparse=False)
    times_encoded = encoder.fit_transform(np.array(times).reshape(-1, 1))

    # Fit linear regression model
    model = LinearRegression()
    model.fit(times_encoded, counts)

    # Print coefficients for each time slot
    print('Coefficients:')
    print(f'Times (encoded): {model.coef_}')

    # Predict appointment counts for each time slot
    predicted_counts = model.predict(times_encoded)

    # Print suggested appointment times based on predicted counts
    print(f'Suggested appointment times for {highly_booked_day}:')
    for i, time in enumerate(times):
        print(f'{time}: Predicted Count = {predicted_counts[i]}')

# Close MongoDB connection
client.close()
