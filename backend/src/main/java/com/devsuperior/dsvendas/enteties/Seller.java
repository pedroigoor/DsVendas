package com.devsuperior.dsvendas.enteties;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// mudar para lombok procurar na pagina do devsuperio
@Entity
@Table (name = "tb_sellers")

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Seller {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;

	@OneToMany(mappedBy = "seller")
	private List<Sale> sales = new ArrayList<>();


	public Seller(Long id, String name) {
		this.id = id;
		this.name = name;
	}
}
