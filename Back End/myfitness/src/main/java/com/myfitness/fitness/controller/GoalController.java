package com.myfitness.fitness.controller;

import com.myfitness.fitness.entity.Goal;
import com.myfitness.fitness.service.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/goal")
public class GoalController {

    @Autowired
    private GoalService goalService;

    @CrossOrigin(origins = "*")
    @PostMapping("/")
    public Goal create(@RequestBody Goal goal) {
        return this.goalService.create(goal);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/")
    public List<Goal> getGoal() {
        return this.goalService.getGoal();
    }

}
