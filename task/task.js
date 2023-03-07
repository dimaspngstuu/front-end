
const users = 

[
  {
    name:"dimas",
    age:20,
    major:"informatic"
  },
  {
    name:"labib",
    age:21,
    major:"system information"
  },
  {
    name:"ilham",
    age:22,
    major:"management"
  },
  {
    name:"faisal",
    age:23,
    major:"education islamic"
  },
  {
    name:"fikri",
    age:25,
    major:"syariah",
  }
];


const all = () => {
  for(let i = 0 ; i <= users.length; i++){
    console.log(users[i])
  }
}


const store = (user) => {
  users.push(user)
}


const update = (index,user) => {
  users[index] = user;
}


const destroy = (index) => {
  users.splice(0,index)
}



const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Labib menjadiIsfa");
  update(1,{
    name:"ishfani ghiyath",
    age:23,
    major:"english"
  });

  /**
   * Test function destroy
   */
  console.log("# Delete User: dimas");
  destroy(1);
};

main();
all()

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
