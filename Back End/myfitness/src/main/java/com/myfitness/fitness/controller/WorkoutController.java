package com.myfitness.fitness.controller;

import com.myfitness.fitness.entity.Workout;
import com.myfitness.fitness.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workout")
public class WorkoutController {

    @Autowired
    private WorkoutService workoutService;

    @CrossOrigin(origins = "*")
    @PostMapping("/")
    public Workout create(@RequestBody Workout workout) {
        return this.workoutService.create(workout);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/")
    public List<Workout> getWorkout() {
        return this.workoutService.getWorkout();
    }

}
