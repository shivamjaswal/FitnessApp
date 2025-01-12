package com.myfitness.fitness.controller;

import com.myfitness.fitness.entity.Activity;
import com.myfitness.fitness.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activity")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @CrossOrigin(origins = "*")
    @PostMapping("/")
    public Activity create(@RequestBody Activity activity) {
        return this.activityService.create(activity);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/")
    public List<Activity> getActivity() {
        return this.activityService.getActivity();
    }

}
