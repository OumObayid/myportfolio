import { useEffect, useState } from "react";
import GuestbookForm from "./GuestbookForm";
import axios from "axios";
export default function GuestbookList() {
  const [dataBooks, setDataBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const base_apiUrl = import.meta.env.VITE_API_BASE_URL_SEND_EMAIL;
  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `${base_apiUrl}/guestbook/getGuestbooks.php`
      );

      if (response.data.success && Array.isArray(response.data.dataBooks)) {
        setDataBooks(response.data.dataBooks);
      } else {
        setDataBooks([]);
      }
    } catch (error) {
      console.error("Erreur chargement guestbook:", error);
      setDataBooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="space-y-4">
      <GuestbookForm onAdd={fetchMessages} />
      {loading ? (
        <p>Chargement...</p>
      ) : dataBooks.length === 0 ? (
        <p>Aucun message pour le moment.</p>
      ) : (
        <div className="row g-3">
  {dataBooks.map((msg) => (
    <div key={msg.id} className="col-12">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h6 className="card-title mb-1">{msg.name} ✍️</h6>
          <p className="card-text">{msg.message}</p>
          <p className="card-subtitle text-muted small">
            {msg.created_at}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

      )}
    </div>
  );
}
