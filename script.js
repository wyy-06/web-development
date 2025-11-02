<script>
  const addNoteBtn = document.getElementById('addNoteBtn');
  const noteInput = document.getElementById('noteInput');
  const notesList = document.getElementById('notesList');

  addNoteBtn.addEventListener('click', function() {
    const noteText = noteInput.value.trim();

    if (noteText === '') {
      alert('Please type your note before adding!');
      return;
    }

    // Create a new note element
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.textContent = noteText;

    // Add to notes list
    notesList.appendChild(noteDiv);

    // Clear input field
    noteInput.value = '';
  });
</script>
