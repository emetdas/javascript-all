const people = [
  { id: 12, name: "Billy", dob: "1998-10-05" },
  { id: 123, name: "Bart", dob: "1993-02-15" },
  { id: 45, name: "Belinda", dob: "1996-01-31" },
  { id: 67, name: "Bonnie", dob: "1998-04-09" },
  { id: 89, name: "Brenda", dob: "1996-07-08" },
  { id: 34, name: "Bobby", dob: "1994-09-12" },
  { id: 234, name: "Blake", dob: "2000-01-01" },
];
console.log(people.sort(Byid));
function Byid(a,b){
    return parseInt(a.id) - parseInt(b.id);
}