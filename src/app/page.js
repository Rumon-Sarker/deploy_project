import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

async function getData() {
  const prisma = new PrismaClient();
  let uses = await prisma.users.findMany({
    orderBy: { id: 'desc' }
  })
  return uses;
}
const page = async () => {
  let users = await getData()
  return (
    <div>
      <h1 className='text-red-400 text-center mt-20 text-4xl font-bold'>Tesinting FullSatck Deploy project</h1>
      <div className='mt-20 text-center'>
        <Link className='btn bg-green-700' href={"/sign-up"}>Create Users-----{">"}</Link>
        <div className=' bg-slate-300 mt-20 '>
          {users.map((user, index) => <div key={index}>
            <div className="card grid gap-5 my-6 bg-primary  text-primary-content">
              <div className="card-body ">
                <div>
                  <h2 >FirstName:  {user.firstName}</h2>
                  <h2>LastName:  {user.lastName}</h2>
                  <p>Email:  {user.email}</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-red-200">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>

    </div>
  );
};

export default page;