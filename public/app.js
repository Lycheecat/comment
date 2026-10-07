async function loadComment() {
    try {
        const tbody = document.getElementById("commentBody");
        const res = await fetch('/api/loadComment');
        const message = await res.json();

        tbody.innerHTML = message.map((item) => `
        <tr>
            <td>${item.message}</td>
        </tr>
        `).join("")
    } catch (err) {
        console.error("Can't provide comment", err)
    }
}

document.getElementById("commentForm").addEventListener("submit", async()=>{
    const message = document.getElementById('commentInput').value;
    const newComment = {
        message:message
    }
    await fetch('api/postComment',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(newComment)
    });
    loadComment();
})

function init(){
    loadComment();
}

init();