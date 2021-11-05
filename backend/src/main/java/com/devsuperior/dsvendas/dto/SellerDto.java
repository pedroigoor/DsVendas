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
public class SellerDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;



	public SellerDto(Long id, String name) {
		this.id = id;
		this.name = name;
	}

	public SellerDto(Seller seller) {
		this.id = seller.getId();
		this.name = seller.getName();
	}

	

}
