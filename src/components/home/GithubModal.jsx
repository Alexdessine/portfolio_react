import React from "react";

function GithubModal({ data }) {
    if (!data) {
        return null;
    }

    return (
        <>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                En savoir plus
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-theme="dark">
                <div className="modal-dialog bg-body-tertiary" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Profil Github</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row align-items-center">

                                    {/* Colonne image */}
                                    <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
                                        <img
                                            src={data.avatar_url}
                                            alt={data.login}
                                            className="img-fluid rounded-circle"
                                            width="280"
                                        />
                                    </div>

                                    {/* Colonne infos */}
                                    <div className="col-12 col-md-8 git">
                                        <p><i class="bi bi-person-fill"></i> <a href={data.html_url}>{data.login}</a></p>
                                        <p><i class="bi bi-card-text"></i> {data.bio}</p>
                                        <p><i class="bi bi-box"></i> Repositories : {data.public_repos}</p>
                                        <p><i class="bi bi-people-fill"></i> Followers : {data.followers}</p>
                                        <p><i class="bi bi-people-fill"></i> Following : {data.following}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GithubModal;
