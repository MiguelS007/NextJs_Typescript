import { useEffect, useState } from "react";
import axios from 'axios';
import Link from 'next/link';
import { User } from '../../interfaces/User';

export interface UserProps {
  users?: User[];
};

function Users({ users }: UserProps) {
  return (
    <div>
      {users.map(user => (
        <div>
          <Link href="/profile/[id]" as={`/profile/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps(context) {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  const data = await response.data;

  return {
    props: { users: data }, // will be passed to the page component as props
  }
}

export default Users;