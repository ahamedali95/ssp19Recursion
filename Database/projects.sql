-- selects_the_titles_of_all_projects_and_their_pledge_amounts_alphabetized_by_name
 SELECT projects.title, SUM(pledges.amount) FROM users, projects, pledges
 	WHERE users.id = pledges.user_id AND projects.id = pledges.project_id
		GROUP BY title;

-- SELECT projects.title, SUM(pledges.amount) FROM pledges
-- 	INNER JOIN projects
-- 		ON pledges.project_id = projects.id
-- 			GROUP BY projects.title;
            
            -- SELECT projects.title, SUM(pledges.amount) FROM projects 
--             JOIN pledges ON projects.id = pledges.project_id GROUP BY projects.title;
-- def selects_the_user_name_age_and_pledge_amount_for_all_pledges_alphabetized_by_name
SELECT users.name, users.age, SUM(pledges.amount) FROM users
	INNER JOIN pledges
		ON pledges.user_id = users.id
			GROUP BY users.name;
-- 
-- def selects_the_titles_and_amount_over_goal_of_all_projects_that_have_met_their_funding_goal
-- SELECT projects.title, (SUM(pledges.amount) - projects.funding_goal) AS amount_left FROM projects
-- 	INNER JOIN pledges
-- 		ON pledges.project_id = projects.id 
-- 			GROUP BY projects.title
-- 				HAVING amount_left >= 0;
                
                SELECT projects.title, (SUM(pledges.amount) - projects.funding_goal) AS amount_left FROM projects 
					JOIN pledges 
						ON projects.id = pledges.project_id 
							GROUP BY projects.title 
								HAVING amount_left >= 0;
-- 
