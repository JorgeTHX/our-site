const SUPABASE_URL = "https://zufhwvqephfnyageaqvd.supabase.co";
const SUPABASE_KEY = "sb_publishable_gSH3SnryxWUWAToFG4D7Og_foM9Ylqu";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);



async function addNote(){

    const message = document.getElementById("noteInput").value;
    const author = document.getElementById("authorInput").value;

    if(message.trim() === "" || author.trim() === ""){
        alert("Please write your name and a note.");
        return;
    }

    await supabaseClient
        .from("notes")
        .insert([
            {
                message: message,
                author: author
            }
        ]);

    document.getElementById("noteInput").value = "";

    loadNotes();
}



async function loadNotes(){

    const { data } = await supabaseClient
        .from("notes")
        .select("*")
        .order("created_at", { ascending:false });

    const container = document.getElementById("notesContainer");

    container.innerHTML = "";

    data.forEach(note => {

        const div = document.createElement("div");
        div.className = "note";

        const date = new Date(note.created_at).toLocaleDateString();

        div.innerHTML = `
        <strong>${note.author}</strong> • ${date}<br><br>
        ${note.message}
        `;

        container.appendChild(div);

    });

}


loadNotes();