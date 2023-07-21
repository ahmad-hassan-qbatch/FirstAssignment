import one from "../1.jpg";

function Card({ title, des,icon }) {
  return (
    <figure class="rounded-xl p-8 forFooter">
      {icon}
      <p class="font-bold text-black">{title}</p>
      <p>{des}</p>
    </figure>
  );
}

export default Card;
