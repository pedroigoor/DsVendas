import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";
import Pagination from "components/Pagination"

import '../../css/tabela.css'

function DataTable() {
    const [activePage, setActivePage] = useState(0);
    const [sizePage, setSizePage] = useState(5);

    const tabela ={
       
       

    }
    const tabelaTamnho ={
      //  height: "500px",  

    }

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=${sizePage}&sort=date,desc`)
            .then(resp => {
                setPage(resp.data);
            })
    }, [activePage,sizePage])

    const changePage = (index: number) => {
        console.log(index)
        setActivePage(index)
     
    }
    const sizePerPage = (size: number) => {        
        setSizePage (size)
        setActivePage(0)
     
    }

  
    return (
        <>
            <Pagination page={page} onPageChange = {changePage} onPagesize={sizePerPage} />
           
            <div className="table-responsive"  style ={tabela} >
        
                <table  className="table table-striped table-sm"   style ={tabelaTamnho}>
                    <thead  >
                        <tr >
                            <th >Data</th>
                            <th >Vendedor</th>
                            <th >Clientes visitados</th>
                            <th >Negócios fechados</th>
                            <th >Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id} >
                                <td >{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td >{item.seller.name}</td>
                                <td >{item.visited}</td>
                                <td >{item.deals}</td>
                                <td >{item.amount.toFixed(2)}</td>
                            </tr>
                        ))}


                    </tbody>
                </table>
           
            </div>
        </>
    );
}

export default DataTable;
