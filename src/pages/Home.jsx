import userStore from "../store/userSrore"

const Home = () => {
  const {title, count, addCount} = userStore();
  // console.log(store);
  return (
    <>
      <h1>{title}</h1>
      <h3>{count}</h3>
      <button className="main__btn" onClick={addCount}>+</button>
    </>
  )
}

export default Home