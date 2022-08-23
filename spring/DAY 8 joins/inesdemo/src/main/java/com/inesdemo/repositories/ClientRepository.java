package com.inesdemo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inesdemo.entities.Client;

public interface ClientRepository extends JpaRepository<Client,Long> {

}
