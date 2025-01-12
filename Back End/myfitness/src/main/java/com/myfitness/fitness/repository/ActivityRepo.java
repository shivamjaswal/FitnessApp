package com.myfitness.fitness.repository;

import com.myfitness.fitness.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepo extends JpaRepository<Activity, Integer> {

}
