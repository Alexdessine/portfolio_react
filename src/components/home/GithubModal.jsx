import React from "react";

function GithubModal({ show, onClose, data }) {
    if (!show) return null; // modale fermée
    if (!data) return null; // ou "Chargement..."

    return (
        <>
            <div className="modal fade show d-block" tabIndex="-1" aria-hidden="true" data-bs-theme="dark">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Mon profil Github</h1>
                            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                        </div>

                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
                                        <img
                                            src={data.avatar_url}
                                            alt={data.login}
                                            className="img-fluid rounded-circle"
                                            width="280"
                                        />
                                    </div>

                                    <div className="col-12 col-md-8 git">
                                        <p><i className="bi bi-person-fill"></i> <a href={data.html_url} target="_blank" rel="noopener noreferrer">{data.login}</a></p>
                                        <p><i className="bi bi-card-text"></i> {data.bio ?? "—"}</p>
                                        <p><i className="bi bi-box"></i> Repositories : {data.public_repos}</p>
                                        <p><i className="bi bi-people-fill"></i> Followers : {data.followers}</p>
                                        <p><i className="bi bi-people-fill"></i> Following : {data.following}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* backdrop */}
            <div className="modal-backdrop fade show" onClick={onClose}></div>
        </>
    );
}

export default GithubModal;
