CREATE TABLE IF NOT EXISTS projects(
  id INTEGER PRIMARY KEY,
  title TEXT,
  category TEXT,
  funding_goal FLOAT,
  start_date TEXT,
  end_date TEXT
);

CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY,
  name TEXT,
  age INTEGER
);

CREATE TABLE IF NOT EXISTS pledges(
  id INTEGER PRIMARY KEY,
  amount FLOAT,
  user_id INTEGER,
  project_id INTEGER
);
