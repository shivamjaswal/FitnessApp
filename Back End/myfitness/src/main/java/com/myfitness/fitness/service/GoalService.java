package com.myfitness.fitness.service;

import com.myfitness.fitness.entity.Goal;
import com.myfitness.fitness.repository.GoalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoalService {

    @Autowired
    private GoalRepo goalRepo;

    public Goal create(Goal goal) {
        return this.goalRepo.save(goal);
    }

    public List<Goal> getGoal() {
        return this.goalRepo.findAll();
    }

}
