package com.inesdemo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inesdemo.entities.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

}
