export async function getUser()
{

    let p = await fetch("https://jsonplaceholder.typicode.com/users");

    let d= await p.json();

    return d;
    
}