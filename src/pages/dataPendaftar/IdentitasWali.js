import React from 'react';

const Wali = () => {
    return (
        <div>
            <div className="header">
                <br/>
                <p className="justify">
                    <h3> Identitas Wali </h3>
                </p>
            </div>
            <div className="box">
                <div className="rxid-table">
                    <div className="rxid-table-header">
                        <div className="input-group flex-nowrap mb-2">
                            <td className="text-center">
                                <button className="btn btn-sm btn-info ">
                                    <i className="fa-solid fa-plus"/>
                                    &nbsp;
                                    Add Data
                                </button>
                                <button className="btn btn-sm btn-warning mx-2">
                                    <i className="fa-solid fa-file-export"/>
                                    &nbsp;
                                    Export Data
                                </button>
                            </td>
                        </div>
                        <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">
                            <em className="fas fa-search"/>
                        </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                aria-label="Search..."
                                aria-describedby="addon-wrapping"
                            />
                        </div>
                    </div>
                    <div className="rxid-table-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>
                                        <div className="th-content">
                                            <span className="th-text"> No </span>

                                        </div>
                                    </th>
                                    <th className="sortable">
                                        <div className="th-content">
                                            <span className="th-text"> Nama Peserta </span>
                                            <span className="sort">
                                                <em className="fas fa-sort"/>
                                            </span>
                                        </div>
                                    </th>
                                    <th className="sortable">
                                        <div className="th-content">
                                            <span className="th-text"> Nama Wali </span>
                                            <span className="sort">
                                                <em className="fas fa-sort"/>
                                            </span>
                                        </div>
                                    </th>
                                    <th className="sortable">
                                        <div className="th-content">
                                            <span className="th-text"> Tanggal Lahir </span>
                                            <span className="sort">
                                                <em className="fas fa-sort"/>
                                            </span>
                                        </div>
                                    </th>
                                    <th className="sortable">
                                        <div className="th-content">
                                            <span className="th-text"> Pendidikan Terakhir </span>
                                            <span className="sort">
                                                <em className="fas fa-sort"/>
                                            </span>
                                        </div>
                                    </th>
                                    <th className="text-center"> Action </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td> 1 </td>
                                    <td> Khodijah </td>
                                    <td> Kaila </td>
                                    <td> 12-02-1996 </td>
                                    <td> SMA </td>
                                    <td className="text-center">
                                        <button className="btn btn-sm btn-primary mx-2">
                                            <em className="fa fa-pen"/>
                                        </button>
                                        <button className="btn btn-sm btn-danger">
                                            <em className="fa fa-trash"/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 2 </td>
                                    <td> Asiyah </td>
                                    <td> Diana </td>
                                    <td> 04-12-1999 </td>
                                    <td> S1 </td>
                                    <td className="text-center">
                                        <button className="btn btn-sm btn-primary mx-2">
                                            <em className="fa fa-pen"/>
                                        </button>
                                        <button className="btn btn-sm btn-danger">
                                            <em className="fa fa-trash"/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 3 </td>
                                    <td> Maryam </td>
                                    <td> Mutmainnah </td>
                                    <td> 09-11-1999 </td>
                                    <td> S2 </td>
                                    <td className="text-center">
                                        <button className="btn btn-sm btn-primary mx-2">
                                            <em className="fa fa-pen"/>
                                        </button>
                                        <button className="btn btn-sm btn-danger">
                                            <em className="fa fa-trash"/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 4 </td>
                                    <td> Fatimah </td>
                                    <td> Maula </td>
                                    <td> 19-09-1998 </td>
                                    <td> SMP </td>
                                    <td className="text-center">
                                        <button className="btn btn-sm btn-primary mx-2">
                                            <em className="fa fa-pen"/>
                                        </button>
                                        <button className="btn btn-sm btn-danger">
                                            <em className="fa fa-trash"/>
                                        </button>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="rxid-table-footer">
                        <div className="select-max-row">
                            <select className="form-select form-select-sm" aria-label="Default select example">
                                <option value="1">5</option>
                                <option value="2" selected >
                                    10
                                </option>
                                <option value="3">25</option>
                            </select>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        Previous
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wali;