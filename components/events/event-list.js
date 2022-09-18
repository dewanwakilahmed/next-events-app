import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem key="" />
      ))}
    </ul>
  );
}

export default EventList;
