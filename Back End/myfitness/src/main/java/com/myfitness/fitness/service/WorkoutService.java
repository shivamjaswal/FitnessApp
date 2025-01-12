package com.myfitness.fitness.service;

import com.myfitness.fitness.entity.Workout;
import com.myfitness.fitness.repository.WorkoutRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkoutService {

    @Autowired
    private WorkoutRepo workoutRep;

    public Workout create(Workout workout) {
        return this.workoutRep.save(workout);
    }

    public List<Workout> getWorkout() {
        return this.workoutRep.findAll();
    }

}
