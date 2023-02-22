const { expect } = require('@jest/globals');
const sum = require('./add');


const UserInsertObject = {
    name:"Micheal john",
    age:2
}



const userList = [{...UserInsertObject}]




test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


//
test('creating user with username and age', () => {
    const reqObject = {
        name:"Micheal john",
        age:2
    }
    expect(reqObject).toMatchObject(UserInsertObject);
    expect(reqObject.name).toMatch(/john/);
    expect(reqObject.age).toBe(2);
});

//
test('update user with username', () => {


    
    const reqObject = {
        name:"Micheal john",
        age:20
    }

    expect(reqObject.name).toMatch(/john/);
    expect(reqObject.age).toBe(20);
    expect(userList.map((x)=>x.name)).toContain('Micheal john')
});



test('update Invalid user', () => {


    
    const reqObject = {
        name:"Micheal john",
        age:20
    }

    expect(reqObject.name).toMatch(/john/);
    expect(reqObject.age).toBe(20);
    expect(userList.map((x)=>x.name)).not.toContain('john Cena');
});


