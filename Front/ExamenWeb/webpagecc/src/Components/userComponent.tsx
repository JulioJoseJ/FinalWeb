import React, { useEffect, useState } from 'react';
import api from '../api';
interface Relocation {
  id: number;
  location: string; // Example attribute, adapt based on your `Relocation` entity
}

interface Organ {
  id: number;
  type: string; // Example attribute, adapt based on your `Organ` entity
}

interface User {
  id: number;
  username: string;
  role: 'client' | 'provider';
  relocations: Relocation[];
  donatedOrgans: Organ[];
  purchasedOrgans: Organ[];
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
      const fetchUsers = async () => {
          try {
              const response = await api.get('/users'); // Ensure the endpoint is correct
              setUsers(response.data);
          } catch (error) {
              console.error('Error fetching users:', error);
          }
      };
      fetchUsers();
  }, []);

  return (
      <div>
          <h2>Users List</h2>
          {users.map((user) => (
              <div key={user.id}>
                  <h3>{user.username} ({user.role})</h3>
                  <h4>Relocations:</h4>
                  <ul>
                      {user.relocations.map((relocation) => (
                          <li key={relocation.id}>{relocation.location}</li>
                      ))}
                  </ul>
                  <h4>Donated Organs:</h4>
                  <ul>
                      {user.donatedOrgans.map((organ) => (
                          <li key={organ.id}>{organ.type}</li>
                      ))}
                  </ul>
                  <h4>Purchased Organs:</h4>
                  <ul>
                      {user.purchasedOrgans.map((organ) => (
                          <li key={organ.id}>{organ.type}</li>
                      ))}
                  </ul>
              </div>
          ))}
      </div>
  );
};

export default Users;