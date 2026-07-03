const $ = sel => document.querySelector(sel);

function showApp() {
    $('#login').style.display = 'none';
    $('#app').style.display = '';
}

function showLogin() {
    $('#login').style.display = '';
    $('#app').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    $('#loginBtn').addEventListener('click', async () => {
        const val = $('#password').value || '';
        const resp = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: val })
        });
        if (resp.ok) {
            showApp();
            await loadProducts();
        } else {
            $('#loginMsg').textContent = 'Invalid password';
        }
    });

    $('#logout').addEventListener('click', () => {
        $('#password').value = '';
        showLogin();
    });
});

async function loadProducts() {
    const res = await fetch('/api/products');
    if (!res.ok) {
        document.querySelector('#productsTable tbody').innerHTML = '<tr><td colspan="4">Failed to load</td></tr>';
        return;
    }
    const data = await res.json();
    const tbody = document.querySelector('#productsTable tbody');
    tbody.innerHTML = '';
    (data.products || []).forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${p.id}</td><td>${p.name}</td><td>${p.price}</td><td>${p.stock}</td>`;
        tbody.appendChild(tr);
    });
}
