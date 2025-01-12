package com.myfitness.fitness.repository;

import com.myfitness.fitness.entity.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutRepo extends JpaRepository<Workout, Integer> {

}
