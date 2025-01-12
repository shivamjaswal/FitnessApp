package com.myfitness.fitness.repository;

import com.myfitness.fitness.entity.Goal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoalRepo extends JpaRepository<Goal, Integer> {

}
