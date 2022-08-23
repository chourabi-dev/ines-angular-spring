package com.inesdemo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inesdemo.entities.Sells;

public interface SellsRepository extends JpaRepository<Sells,Long> {

}
