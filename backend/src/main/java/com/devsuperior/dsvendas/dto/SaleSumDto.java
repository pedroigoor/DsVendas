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
public class SaleSumDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private String sellerName;
	private Double sum;

	

	public SaleSumDto(Seller seller, Double sum) {
		this.sellerName = seller.getName();
		this.sum = sum;
	}

	

}
