import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);


    //   // 로그인
    //   let form = new FormData() 
    //   form.append('username', "member1") 
    //   form.append('password', "1234asdf")
    //   axios({
    //     method: 'POST',
    //     url: 'http://13.124.241.254/user/login',
    //     data: form,
    //     headers: 
    //     {
    //       'Access-Control-Allow-Origin':'http://localhost:3000', 
    //       "Access-Control-Allow-Credentials": true,
    //       'Content-Type': 'application/x-www-form-urlencoded' 
    //     },
    //     config :{withCredentials: true}
    //   })
		// 		.then( response => { console.log(response) } )
		// 		.catch( response => { console.log(response) } );

    // }


    //   // 회원정보 가져오기
    //   axios({
    //     method: 'GET',
    //     url: 'http://13.124.241.254/api/users',
    //     headers: 
    //     {
    //       'Access-Control-Allow-Origin':'http://localhost:3000', 
    //       "Access-Control-Allow-Credentials": true,
    //       // 'Content-Type': 'application/x-www-form-urlencoded' 
    //     },
    //     config :{withCredentials: true}
    //   })
		// 		.then( response => { console.log(response) } )
		// 		.catch( response => { console.log(response) } );

		// }






      // 회원가입
    //   axios({
    //     method: 'POST',
    //     url: 'http://13.124.241.254/api/users',
    //     data: 
    //     JSON.stringify( 
    //       { 
    //         "username": "jinsik222",
    //         "password": "bbb1",
    //         "sex": "male",
    //         "age": 30,
    //         "job" : "student",
    //         "salary" : 3000000
    //       }
    //     ),
    //     headers: 
    //     {
    //       'Access-Control-Allow-Origin':'*', 
    //       "Access-Control-Allow-Credentials": true,
    //       'Content-Type': 'application/json' 
    //     }
    //   })
		// 		.then( response => { console.log(response) } )
		// 		.catch( response => { console.log(response) } );

		// }



      // 월기록 조회
      axios({
        method: 'GET',
        url: 'http://13.124.241.254/api/records',
        data: 
        JSON.stringify( 
          { 
            "date":"2021-10-12",
            "category":"식비",
            "userId": "",
            "page":1,
            "display":10
          }
        ),
        headers: 
        {
          'Access-Control-Allow-Origin':'*', 
          "Access-Control-Allow-Credentials": true,
          'Content-Type': 'application/json' 
        }
      })
				.then( response => { console.log(response) } )
				.catch( response => { console.log(response) } );

		}

	
			
      // setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Users() {
//   const [users, setUsers] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         // 요청이 시작 할 때에는 error 와 users 를 초기화하고
//         setError(null);
//         setUsers(null);
//         // loading 상태를 true 로 바꿉니다.
//         setLoading(true);
//         const response = await axios.get(
//           'https://jsonplaceholder.typicode.com/users'
//         );
//         setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
//         console.log(response.data)
//       } catch (e) {
//         setError(e);
//       }
//       setLoading(false);
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <div>로딩중..</div>;
//   if (error) return <div>에러가 발생했습니다</div>;
//   if (!users) return null;
//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>
//           {user.username} ({user.name})
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default Users;