1) SELECT name FROM teams;
2) SELECT stadium from teams; SELECT  head_coach FROM teams WHERE conference='AFC';
3) SELECT  head_coach FROM teams WHERE conference='AFC';
4) SELECT COUNT (*) FROM players;
5) SELECT  name, head_coach FROM teams WHERE conference='AFC' AND division='South' OR conference='NFC' AND division='North';
6) SELECT * FROM players ORDER BY salary DESC LIMIT 50;
7) SELECT AVG(salary) FROM players;
8) SELECT name, position FROM players WHERE salary > 10 000 000;
9) SELECT name FROM players ORDER BY salary DESC LIMIT 1;
10) SELECT name, position FROM players ORDER BY salary ASC LIMIT 100;
11) SELECT AVG(salary) FROM players WHERE position='DE';
12) SELECT players.name, teams.name FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'Buffalo Bills'; (would not get)
13) SELECT SUM(players.salary) FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'New York Giants'; (would not get)
;
14) SELECT players.name FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE '%Green Bay Packers%' ORDER BY salary ASC LIMIT 1
; (would not get)