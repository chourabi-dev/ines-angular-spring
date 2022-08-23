package com.inesdemo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inesdemo.entities.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {

}
