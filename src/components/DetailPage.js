function DetailPage({ info }) {
  console.log(info);
  return (
    <>
      <h1>{info.title}</h1>
      <p>Rating: {info.rating}</p>
      <img src={info.large_cover_image} alt='img' />
    </>
  );
}

export default DetailPage;
