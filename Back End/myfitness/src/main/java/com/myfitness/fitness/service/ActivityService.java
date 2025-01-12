package com.myfitness.fitness.service;

import com.myfitness.fitness.entity.Activity;
import com.myfitness.fitness.repository.ActivityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepo activityRepo;

    public Activity create(Activity activity) {
        return this.activityRepo.save(activity);
    }

    public List<Activity> getActivity() {
        return this.activityRepo.findAll();
    }

}
