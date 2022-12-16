import React from "react";

const DisplayTable = ({ data, repositories }) => {
  return (
    <table className="Table">
      <thead>
      <img
                className=" image" style={{width: '150px', height: '150px' }}
                src={data.avatar_url}
                alt={data.avatar_url}
              />
        <tr>
          <th>FullName</th>
          <th>UserName</th>
          <th>Location</th>
          <th>Email</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
      
        <tr>
       
          <td>{data.name}</td>
          <td>
            {data.login}
          </td>
          <td>{data.location}</td>
          <td>{data.email}</td>
          <td>
            {repositories.map(repo => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank" rel="noreferrer">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;