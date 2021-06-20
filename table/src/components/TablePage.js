import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getUsers } from '../api/getUsers';
import Table from './Table';

const styles = {
  contentSection: {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: 8
  },
  headerSection: {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: 8
  }
}

const TablePage = ({ classes }) => {
 
  const [users, setUsers] = useState([]);
  const [getFilterUsers, setFilterUsers] = useState([]);
  const [emailFilter, setEmailFilter] = useState('all');

  useEffect(() => {
    getUsers().then(data => {
      const sortData = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
      console.log(sortData)
      setUsers(sortData);
      setFilterUsers(sortData);      
    });
  }, []);

  useEffect(() => {
    let filteredRestaurants = filterDataByemail(users);
    setFilterUsers(filteredRestaurants);
  }, [emailFilter]);

  const filterDataByemail = data => {
    if (emailFilter !== 'all') {
      return data.filter(row => row.email.includes(emailFilter));
    }
    return data;
  }

  const headerOptions = [
    {
      id: "id"      
    },
    {
      id: "firstName"
    },
    {
      id: "lastName"
    },
    {
      id: "phone"
    },
    {
      id: "email",
      filterOptions: () => renderDropdown(emailFilter, e => setEmailFilter(e.target.value), renderOptions())      
    }];


  const renderOptions = () => {
    return users.reduce((acc, val) => {
      const emails = val.email.split(',');
      return Array.from(new Set([...acc, ...emails]));
    }, ['all'])
  };

  const renderDropdown = (currentVal, changeFunc, options) => {
    return (
      <select value={currentVal} onChange={changeFunc}>
        {options.map(option => <option value={option}>{option}</option>)}
      </select>
    )
  };

  const generateRow = row => {
    return (
      <tr key={row.id}>
        {headerOptions.map(field => (
          <td className={classes.contentSection}>
            {row[field.id]}
          </td>
        ))}
      </tr>
    )
  };

  const header = (
    <tr>
      {headerOptions.map(header => (
        <th className={classes.headerSection}>
          {header.id}
          {header.filterOptions && (
            <div>
              {header.filterOptions()}
            </div>
          )}
        </th>
      ))}
    </tr>
  );

  return (
    <div>
      <Table
        renderRow={row => generateRow(row)}
        entries={getFilterUsers}
        header={header}
        placeholder="Search..."
        textfilterOptions={['firstName', 'lastName', 'email']}
        pageLimit={10}
      />
    </div>
  )
}

export default withStyles(styles)(TablePage);