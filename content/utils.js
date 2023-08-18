const accepted = [
  "youtube.com",
  "w3schools.com",
  "geeksforgeeks.org",
  "practice.geeksforgeeks.org",
  "hackerearth.com",
  "hackerrank.com",
  "leetcode.com",
  "scaler.com",
  "medium.com",
  "columbia.edu",
  "programiz.com",
  "stackoverflow.com",
  "interviewbit.com"
]

const warnings = new Map( [
  [ 'coursera.org', 'paywall' ],
  [ 'udemy.com', 'paywall' ],
] )


/*
- auto parser for video/text
  - ALL yt is video, else text
  - UNLESS marked as video
- auto parser for paywall warnings (no explode)
- auto parser for unacceptable sites (explode)
*/