// Firebase services for handling donations, messages, and contact forms
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit,
  serverTimestamp,
  where 
} from 'firebase/firestore';
import { db } from '../lib/firebase';

// Collections
const COLLECTIONS = {
  DONATIONS: 'donations',
  MESSAGES: 'messages',
  CONTACTS: 'contacts',
  VOLUNTEERS: 'volunteers'
};

// Add a donation record
export const addDonation = async (donationData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.DONATIONS), {
      ...donationData,
      timestamp: serverTimestamp(),
      status: 'pending'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding donation:', error);
    return { success: false, error: error.message };
  }
};

// Add a message/contact form submission
export const addMessage = async (messageData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.MESSAGES), {
      ...messageData,
      timestamp: serverTimestamp(),
      read: false
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding message:', error);
    return { success: false, error: error.message };
  }
};

// Add a contact form submission
export const addContact = async (contactData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.CONTACTS), {
      ...contactData,
      timestamp: serverTimestamp(),
      responded: false
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding contact:', error);
    return { success: false, error: error.message };
  }
};

// Add a volunteer registration
export const addVolunteer = async (volunteerData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.VOLUNTEERS), {
      ...volunteerData,
      timestamp: serverTimestamp(),
      status: 'pending'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding volunteer:', error);
    return { success: false, error: error.message };
  }
};

// Get recent donations (for dashboard)
export const getRecentDonations = async (limitCount = 10) => {
  try {
    const q = query(
      collection(db, COLLECTIONS.DONATIONS),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    const donations = [];
    querySnapshot.forEach((doc) => {
      donations.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: donations };
  } catch (error) {
    console.error('Error getting donations:', error);
    return { success: false, error: error.message };
  }
};

// Get all messages (for dashboard)
export const getMessages = async (unreadOnly = false) => {
  try {
    let q;
    if (unreadOnly) {
      q = query(
        collection(db, COLLECTIONS.MESSAGES),
        where('read', '==', false),
        orderBy('timestamp', 'desc')
      );
    } else {
      q = query(
        collection(db, COLLECTIONS.MESSAGES),
        orderBy('timestamp', 'desc')
      );
    }
    const querySnapshot = await getDocs(q);
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: messages };
  } catch (error) {
    console.error('Error getting messages:', error);
    return { success: false, error: error.message };
  }
};

// Get donation statistics (for dashboard)
export const getDonationStats = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.DONATIONS));
    let totalAmount = 0;
    let totalDonations = 0;
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.amount && !isNaN(parseFloat(data.amount))) {
        totalAmount += parseFloat(data.amount);
      }
      totalDonations++;
    });
    
    return { 
      success: true, 
      data: { 
        totalAmount, 
        totalDonations,
        averageDonation: totalDonations > 0 ? totalAmount / totalDonations : 0
      } 
    };
  } catch (error) {
    console.error('Error getting donation stats:', error);
    return { success: false, error: error.message };
  }
};
