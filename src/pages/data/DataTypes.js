import { useState } from "react";

function DataTypes() {
  // Show the fowing on page
  const [stringV, setStringV] = useState("IngeniousZone");
  // console.log(stringV, "Hassan");

  const [object, setObject] = useState({
    name: "Zeeshan",
    age: "20",
    education: "BS",
    gender: "Mail",
    martialStatus: "unmarried",
  });

  // console.log(object);

  const [arrayString, setArrayString] = useState([
    "Usman",
    "Ateeq",
    "Hassan",
    "Qasim",
    "Zeeshan",
    "ALi Haider",
    "Asif sb",
  ]);

  // console.log(arrayString, "arrayString");

  const [arrayObjects, setArrayObjects] = useState([
    { name: "Zeeshan U", age: "20" },
    { name: "Zeeshan Y", age: "21" },
    { name: "Zeeshan W", age: "22" },
    { name: "Zeeshan T", age: "23" },
    { name: "Zeeshan H", age: "24" },
    { name: "Zeeshan T", age: "26" },
    { name: "Zeeshan F", age: "27" },
    { name: "Zeeshan A", age: "28" },
  ]);

  // console.log(arrayObjects, "Hassan");

  // const [ateeq, setAteeqObjects] = useState({
  //   v1: { name: "Zeeshan U", age: "20" },
  //   v2: { name: "Zeeshan Y", age: "21" },
  //   v3: { name: "Zeeshan W", age: "22" },
  //   v4: { name: "Zeeshan T", age: "23" },
  //   v5: { name: "Zeeshan H", age: "24" },
  // });
  // console.log(ateeq);

  const [objectArray, setObjectArray] = useState({
    peoples: [
      { name: "Zeeshan U", age: "20" },
      { name: "Zeeshan Y", age: "21" },
      { name: "Zeeshan W", age: "22" },
      { name: "Zeeshan T", age: "23" },
      { name: "Zeeshan H", age: "24" },
      { name: "Zeeshan T", age: "26" },
      { name: "Zeeshan F", age: "27" },
      { name: "Zeeshan A", age: "28" },
    ],
  });

  const [task, setTask] = useState({
    person: {
      name: "Hassan",
      martialStatus: "unmarried",
      cars: [
        { brand: "Honda", title: "city", power: "1300cc" },
        { brand: "Toyota", title: "XLI", power: "1300cc" },
      ],
      friends: [
        { name: "Hassan", martialStatus: "unmarried" },
        { name: "Hassan", martialStatus: "unmarried" },
      ],
      metas: { watch: "Royal", laptop: "HP", bike: "honda 70" },
    },
  });

  // console.log(task, "Tasks");

  const [objectArrayMixed, setObjectArrayMixed] = useState({
    peoples: [
      {
        name: "Zeeshan U",
        age: "20",
        meta: { martialStatus: "unmarried", bike: "XYZ" },
        cars: [{ name: "city" }],
      },
      {
        name: "Zeeshan Y",
        age: "21",
        meta: { martialStatus: "unmarried", bike: "XYZ" },
        cars: [{ name: "city" }],
      },
      {
        name: "Zeeshan W",
        age: "22",
        meta: { martialStatus: "unmarried", bike: "XYZ" },
        cars: [{ name: "city" }],
      },
      {
        name: "Zeeshan T",
        age: "23",
        meta: { martialStatus: "unmarried", bike: "XYZ" },
        cars: [{ name: "city" }],
      },
      {
        name: "Zeeshan H",
        age: "24",
        meta: { martialStatus: "unmarried", bike: "XYZ" },
        cars: [{ name: "city" }],
      },
      {
        name: "Zeeshan T",
        age: "26",
        meta: { martialStatus: "unmarried", bike: "XYZ" },
        cars: [{ name: "city" }],
      },
      {
        name: "Zeeshan F",
        age: "27",
        meta: { martialStatus: "unmarried", bike: "XYZ" },
        cars: [{ name: "city" }],
      },
      {
        name: "Zeeshan A",
        age: "28",
        meta: { martialStatus: "unmarried", bike: "XYZ" },
        cars: [{ name: "city" }],
      },
    ],
  });
  // console.log(objectArrayMixed);

  const [taskTwo, setTaskTwo] = useState([
    {
      name: "Usman",
      age: 30,
      edu: "BS",
      cars: [
        { brand: "honda", model: 2024, power: 2000 },
        { brand: "MG", model: 2024, power: 2500 },
      ],
      friend: { name: "hassan", age: 30 },
      bike: { bike: { bike: { bike: "CD 70" } } },
      newCars: [
        {
          newCars: [
            {
              newCars: [
                { brand: "honda", model: 2024, power: 2000 },
                { brand: "MG", model: 2024, power: 2500 },
              ],
            },
          ],
        },
      ],
    },
  ]);

  // console.log(taskTwo, "taskTwo");

  return (
    <>
      {taskTwo.map((t) => {
        return (
          <>
            <div>
              <h4 style={{}}>Person Info</h4>
              <p style={{ margin: "0px" }}>Name: {t.name}</p>
              <p style={{ margin: "0px" }}>Age: {t.age}</p>
              <p style={{ margin: "0px" }}>Edu: {t.edu}</p>
              <h4>Cars</h4>
              {t.cars.map((tw) => {
                return (
                  <div>
                    {tw.brand} &nbsp;
                    {tw.model} &nbsp;
                    {tw.power} &nbsp;
                  </div>
                );
              })}
              {t.friend.name} &nbsp;
              {t.bike.bike.bike.bike} &nbsp;
              <h4>Brands</h4>
              {t.newCars.map((two) => {
                return (
                  <div>
                    {two.newCars.map((tf) => {
                      return (
                        <div>
                          {tf.newCars.map((f) => {
                            return <div>{f.brand}</div>;
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </>
        );
      })}

      <div style={{ textAlign: "center", border: "2px solid black" }}>
        <p>
          First Data Type is <b>String</b>
        </p>
        {<h3>Company Name: {stringV} </h3>}
      </div>

      <div style={{ textAlign: "center", border: "2px solid black" }}>
        <p>
          Second Type of Data <b>Object</b>
        </p>
        <p>
          <b>Name:</b> {object.name}
        </p>
        <p>
          <b>Age:</b> {object.age}
        </p>
        <p>
          <b>Name:</b> {object.education}
        </p>
        <p>
          <b>Name:</b> {object.gender}
        </p>
        <p>
          <b>Name:</b> {object.martialStatus}
        </p>
      </div>

      <div style={{ border: "2px solid black", textAlign: "center" }}>
        <p>
          Third Type of Data Array <b>String</b>
        </p>
        {arrayString.map((data, index) => {
          return (
            <p key={index}>
              <b>Name:</b> {data}
            </p>
          );
        })}
      </div>

      <div style={{ border: "2px solid black", textAlign: "center" }}>
        <p>
          Fourth type of data <b>Array object</b>{" "}
        </p>
        {arrayObjects.map((obj) => {
          return (
            <p>
              <b> Name:</b> {obj.name} <b> Age: {obj.age} </b>
            </p>
          );
        })}
      </div>

      <div style={{ border: "2px solid black", textAlign: "center" }}>
        <p>
          Fifth type of data <b>Array object</b>
        </p>
        {objectArray.peoples.map((ary) => {
          return (
            <div>
              <p>
                <b>Name:</b> {ary.name} <b>Age:</b> {ary.age}
              </p>
            </div>
          );
        })}
      </div>

      <div style={{ border: "2px solid black", textAlign: "center" }}>
        <h3>
          Sixth Type of Data <b>Object Array Mixed</b>{" "}
        </h3>
        {objectArrayMixed.peoples.map((mix) => {
          return (
            <div>
              {/* {console.log(mix, "mix")} */}
              <p>
                <b>
                  <b>Name:</b>
                </b>
                {mix.name} <b>Age:</b> {mix.age} <b>Martial Status:</b>
                {mix.meta.martialStatus}
                {mix.cars.map((car) => {
                  return <div>{car.name}</div>;
                })}
              </p>
            </div>
          );
        })}
      </div>

      <div
        style={{
          border: "2px solid black",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <>
          <h3>Task</h3>
          <div>
            <b>Name:</b>
            {task.person.name}
          </div>
          <div>
            <b>Martial Status:</b> {task.person.martialStatus}
          </div>

          {task.person.cars.map((cr) => {
            return (
              <>
                <div>
                  <b>Car Brand:</b> {cr.brand}
                </div>
                <div>
                  <b>Car Name:</b> {cr.title}
                </div>
              </>
            );
          })}

          {task.person.friends.map((crs) => {
            return (
              <>
                <div>
                  <b>Name:</b>
                  {crs.name} <b>Martial Status:</b> {crs.martialStatus}
                </div>
              </>
            );
          })}
        </>
      </div>
    </>
  );

  // return (
  //   <div>
  //     <h1>String Name: {stringV}</h1>
  //     <p>Object</p>
  //     <div>
  //       <p>Name: {object.name}</p>
  //       <p>Age: {object.age}</p>
  //       <p>Education: {object.education}</p>
  //       <p>Gender: {object.gender}</p>
  //       <p>Martial Status: {object.martialStatus}</p>
  //     </div>
  //     {arrayString.map((name, index) => {
  //       return (
  //         <div key={index}>
  //           <p>Name: {name} </p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default DataTypes;
