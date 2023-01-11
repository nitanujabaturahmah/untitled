import React from 'react';

const Dokumen = () => {
    return (
        <div>
            <div className="header">
                <br/>
                <p className="justify">
                    <h3> Verifikasi Dokumen </h3>
                </p>
            </div>
            <div className="box">
                <div className="rxid-table">
                    <div className="rxid-table-header">
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
                                            <span className="th-text"> Nama Lengkap </span>
                                            <span className="sort">
                                                <em className="fas fa-sort"/>
                                            </span>
                                        </div>
                                    </th>
                                    <th className="sortable">
                                        <div className="th-content">
                                            <span className="th-text"> Akte Kelahiran </span>
                                            <span className="sort">
                                                <em className="fas fa-sort"/>
                                            </span>
                                        </div>
                                    </th>
                                    <th className="sortable">
                                        <div className="th-content">
                                            <span className="th-text"> Kartu Keluarga </span>
                                            <span className="sort">
                                                <em className="fas fa-sort"/>
                                            </span>
                                        </div>
                                    </th>
                                    <th className="sortable">
                                        <div className="th-content">
                                            <span className="th-text"> Pas Photo </span>
                                            <span className="sort">
                                                <em className="fas fa-sort"/>
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td> 1 </td>
                                    <td> Khodijah </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa fa-file-text"/>
                                            &nbsp;
                                            Lihat File
                                        </button>
                                    </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa fa-file-text"/>
                                            &nbsp;
                                            Lihat File
                                        </button>
                                    </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa fa-file-text"/>
                                            &nbsp;
                                            Lihat File
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 2 </td>
                                    <td> Asiyah </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa fa-file-text"/>
                                            &nbsp;
                                            Lihat File
                                        </button>
                                    </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa fa-file-text"/>
                                            &nbsp;
                                            Lihat File
                                        </button>
                                    </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa fa-file-text" />
                                            &nbsp;
                                            Lihat File
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 3 </td>
                                    <td> Maryam </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa  fa-file-text"/>
                                            &nbsp;
                                            Lihat File
                                        </button>
                                    </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa  fa-file-text"/>
                                            &nbsp;
                                            Lihat File
                                        </button>
                                    </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa fa-file-text"/>
                                            &nbsp;
                                            Lihat File
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 4 </td>
                                    <td> Fatimah </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa fa-file-text"/>
                                            &nbsp;
                                            Lihat File
                                        </button>
                                    </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa fa-file-text"/>
                                            &nbsp;
                                            Lihat File
                                        </button>
                                    </td>
                                    <td className="text">
                                        <button className="btn btn-sm btn-primary">
                                            <em className="fa fa-file-text"/>
                                            &nbsp;
                                            Lihat File
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

export default Dokumen;