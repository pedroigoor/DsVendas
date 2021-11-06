import { SalePage } from "types/sale";

type Props = {
  page: SalePage
  onPageChange: Function;
  onPagesize: Function;
}
function Pagination({ page, onPageChange, onPagesize }: Props) {
  const style = {
    paddingTop: '7px'
  };
  return (
    <>


      <div className="row row-cols-auto">
        <div className="col" style={style}>
          <div className="col">  <select className="form-select" aria-label="sizer per page" onChange={(val) => onPagesize(val.target.value)}>
            <option selected value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select></div></div>
      </div>
      <br />

      <div className="row d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${page.first ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => onPageChange(0)}>
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>

            <li className={`page-item ${page.first ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => onPageChange(page.number - 1)}>
                <span aria-hidden="true">Anterior</span>
              </button>

            </li>
            <li className="page-item ">
              <span className="page-link btn-primary" >{page.number + 1}</span>
            </li>
            {!page.last && (
              <><li className="page-item ">
                <span className="page-link">...</span>
              </li><li className="page-item ">
                  <span className="page-link" >{page.totalPages}</span>
                </li></>
            )}


            <li className={`page-item ${page.last ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => onPageChange(page.number + 1)}>
                <span aria-hidden="true">Próxima</span>
              </button>

            </li>
            <li className={`page-item ${page.last ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => onPageChange(page.totalPages - 1)}>
                <span aria-hidden="true">&raquo;</span>
              </button>

            </li>


          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col" style={style}> <span aria-hidden="true" className=" pull-right">{page.number + 1} / {page.totalPages}</span></div>
        </div>
      </div>
      <br />





    </>
  );
}

export default Pagination;