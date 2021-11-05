package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.enteties.Seller;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor

public class SaleSuccessDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private String sellerName;
	private Long visited;
	private Long deals;



	public SaleSuccessDto(Seller seller, Long visited, Long deals) {
		this.sellerName = seller.getName();
		this.visited = visited;
		this.deals = deals;
	}

	
}
