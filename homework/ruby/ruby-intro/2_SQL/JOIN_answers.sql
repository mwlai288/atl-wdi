1
SELECT matchid, player FROM goal 
  WHERE teamid = 'GER'

2
SELECT id,stadium,team1,team2
  FROM game WHERE id = 1012

3
SELECT player, teamid, stadium, mdate FROM
	     goal JOIN game ON (id = matchid)
	    WHERE teamid = 'GER'

4
SELECT team1, team2, player FROM goal JOIN game ON id=matchid WHERE player LIKE 'Mario%'

5
SELECT player, teamid, coach, gtime
  FROM goal JOIN eteam ON teamid=id
  WHERE gtime<=10

6
SELECT mdate, teamname FROM
	game JOIN eteam ON (team1 = eteam.id)
	WHERE coach = 'Fernando Santos'

7
SELECT player FROM 
    goal JOIN game ON id=matchid 
    WHERE  stadium = 'National Stadium, Warsaw'

8

9
SELECT teamname, COUNT(teamid) FROM 
	goal JOIN eteam ON (teamid = id)
	GROUP BY teamname

10
SELECT stadium, COUNT(*) FROM
	game JOIN goal ON (id = matchid)
	GROUP BY stadium

11
SELECT matchid, mdate, COUNT(*) FROM
	game JOIN goal ON (id = matchid)
	WHERE team1 = 'POL' OR team2 = 'POL'
	GROUP BY matchid

12
SELECT matchid, mdate, COUNT(*) FROM
	game JOIN goal ON (id = matchid)
	WHERE teamid = 'GER'
	GROUP BY matchid