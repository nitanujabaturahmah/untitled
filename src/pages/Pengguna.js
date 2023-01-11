import React from 'react';
import '../App.css';

const Pengguna = () => {
    return (
        <div>
        <div className="header">
            <br/>
            <p className="justify">
                <h1> Data Pengguna </h1>
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
                                            <span className="th-text"> Nama </span>
                                            <span className="sort">
                                    <em className="fas fa-sort"/>
                                </span>
                                        </div>
                                    </th>
                                    <th className="sortable">
                                        <div className="th-content">
                                            <span className="th-text"> Email </span>
                                            <span className="sort">
                                    <em className="fas fa-sort"/>
                                </span>
                                        </div>
                                    </th>
                                    <th className="sortable">
                                        <div className="th-content">
                                            <span className="th-text"> Phone Number </span>
                                            <span className="sort">
                                    <em className="fas fa-sort"/>
                                </span>
                                        </div>
                                    </th>
                                    <th className="sortable">
                                        <div className="th-content">
                                            <span className="th-text"> Address </span>
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
                                <td> dijah@gmail.com </td>
                                <td> 081234567 </td>
                                <td> Makkah </td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-primary">
                                        <em className="fa fa-search"/>
                                    </button>
                                    <button className="btn btn-sm btn-warning mx-2">
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
                                <td> asiyah@gmail.com </td>
                                <td> 087897896 </td>
                                <td> Israil </td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-primary">
                                        <em className="fa fa-search"/>
                                    </button>
                                    <button className="btn btn-sm btn-warning mx-2">
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
                                <td> mariya@gmail.com </td>
                                <td> 081234567 </td>
                                <td> Nasrani </td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-primary">
                                        <em className="fa fa-search"/>
                                    </button>
                                    <button className="btn btn-sm btn-warning mx-2">
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
                                <td> fatimah@gmail.com </td>
                                <td> 081234222 </td>
                                <td> Madinah </td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-primary">
                                        <em className="fa fa-search" />
                                    </button>
                                    <button className="btn btn-sm btn-warning mx-2">
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

export default Pengguna;