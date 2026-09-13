# Research page editorial notes

Updated 2026-09-12. The page groups all 27 existing entries into three themes, with one placement per paper: large-scale optimization (13), optimal transport and experimental design (8), and optimization, AI and robotics (6). The review used the locally available original PDFs: abstracts for all papers, plus introductions, conclusions, and the relevant numerical sections for the featured results. Public arXiv records were also checked. Existing titles, authors, publication details, and resource links are preserved; the ten existing preprints carry a text badge. Accepted papers are not marked as preprints.

## Topic map

### Large-scale optimization: theory & algorithms (13)

| Paper | Core idea informing its placement |
| --- | --- |
| [Mixed-precision GPU acceleration for MEB](https://arxiv.org/abs/2605.31425) | Low-precision screening followed by high-precision refinement, with full constraint checks, for large minimum enclosing ball problems. |
| [Generalized symmetric matrix factorization](https://arxiv.org/abs/2603.19147) | An alternating optimization framework for generalized symmetric matrix factorization. |
| [D-ripALM](https://arxiv.org/abs/2602.06398) | Relative-error control in decentralized proximal augmented Lagrangian optimization. |
| [Relative-type inexact proximal ALM for convex nonlinear programming](https://arxiv.org/abs/2510.25261) | Extend convergence analysis of implementable relative inexactness to convex nonlinear constraints. |
| [Nesterov’s accelerated Jacobi-type methods](https://arxiv.org/abs/2407.03272) | Parallelizable accelerated iterations for large symmetric positive semidefinite linear systems. |
| [Inexact Halpern iteration](https://arxiv.org/abs/2402.06033) | Inexact fixed-point iterations with applications to distributionally robust optimization. |
| [Squared smoothing Newton for SDP](https://arxiv.org/abs/2303.05825) | Exploit semidefinite structure through smoothing and Newton steps. |
| [ripALM](https://arxiv.org/abs/2411.13267) | A relative-error criterion with one tolerance parameter, avoiding a prescribed summable error sequence and correction steps. |
| [Burer–Monteiro acceleration of nuclear-norm optimization](https://arxiv.org/abs/2204.14067) | Combine efficient factorized low-rank optimization with safeguards for the original convex problem. |
| [QPPAL](https://arxiv.org/abs/2103.13108) | A two-phase proximal augmented Lagrangian approach to high-dimensional convex quadratic programs. |
| [Degenerate doubly nonnegative projection](https://arxiv.org/abs/2009.11272) | Understand degeneracy and design robust solvers for projection onto the doubly nonnegative cone. |
| [Homotopy proximal variable-metric framework](https://arxiv.org/abs/1812.05243) | Homotopy and variable metrics for composite convex minimization, including practical inexact solves. |
| [Inexact ALM for second-order cone programming](https://arxiv.org/abs/2010.08772) | A practical augmented Lagrangian solver exploiting second-order cone structure. |

### Optimal transport & experimental design (8)

| Paper | Core idea informing its placement |
| --- | --- |
| [Practical convergent Gromov–Wasserstein algorithm](https://arxiv.org/abs/2605.04175) | A provably convergent inexact projected-gradient approach to Gromov–Wasserstein transport. |
| [Beyond expected information gain](https://arxiv.org/abs/2604.21849) | Integral probability metrics provide geometry-aware Bayesian design utilities and plug-and-play extensions. |
| [PINS](https://arxiv.org/abs/2502.03749) | Combine Sinkhorn and sparse Newton steps within entropic proximal iterations. |
| [NewVEM](https://arxiv.org/abs/2407.03294) | Newton vertex exchange for constrained self-concordant minimization, with experimental design applications. |
| [PNOD](https://arxiv.org/abs/2409.18392) | Projected Newton methods for exact optimal experimental design. |
| [Sparse smoothing Newton for discrete OT](https://arxiv.org/abs/2311.06448) | Exploit sparsity to compute accurate solutions to discrete optimal transport. |
| [Corrected inexact proximal ALM for group-quadratic OT](https://arxiv.org/abs/2311.01976) | Relative-error proximal ALM for transport with group-quadratic regularization. |
| [Implementable inexact entropic proximal point algorithm](https://arxiv.org/abs/2011.14312) | Practical inexact entropic proximal solves for linear programs, including capacity-constrained multi-marginal transport. |

### Optimization, AI & robotics (6)

| Paper | Core idea informing its placement |
| --- | --- |
| [OptimAI](https://arxiv.org/abs/2504.16918) | Collaborating LLM agents formulate, code, debug, and solve optimization problems expressed in natural language. |
| [Learning penalty parameters](https://arxiv.org/abs/2409.17320) | Learn penalty choices to accelerate multi-block constrained optimization. |
| [Fast and certifiable trajectory optimization / STROM](https://arxiv.org/abs/2406.05846) | Sparse semidefinite relaxations and GPU computation provide trajectories with optimality certificates. |
| [Symbolic structures in PDEs with LLMs](https://arxiv.org/abs/2503.09986) | Use LLMs to identify interpretable symbolic structure in differential equations. |
| [Stochastic proximal gradient for expected reward](https://arxiv.org/abs/2401.12508) | Stochastic and variance-reduced proximal-gradient algorithms for regularized reward optimization. |
| [Inexact projected gradient for SDP / STRIDE](https://arxiv.org/abs/2105.14033) | Combine projected-gradient steps and safeguarded low-rank local search for large SDP relaxations, including robotics applications. |

## Figure provenance and result conditions

All three PNGs are direct crops rendered from the original paper PDFs with Poppler at 220 dpi. No plotted values, curves, legends, or axes were redrawn or altered. The on-page images link to the full-size crops; captions link to the source PDFs.

| Asset | Source | Extraction and context |
| --- | --- | --- |
| `images/research/mixed-precision-meb.png` | [arXiv:2605.31425](https://arxiv.org/pdf/2605.31425#page=16), PDF page 16, Fig. 3(b) | Crop x=310, y=650, width=1260, height=378 pixels at 220 dpi. Both runtime and speedup panels for 5,000 balls; dimensions 100, 500, 1,000, 5,000, and 10,000. Compares ripALM and mixed-precision mp-ripALM at the same final accuracy. |
| `images/research/boed-utility.png` | [arXiv:2604.21849](https://arxiv.org/pdf/2604.21849#page=17), PDF page 17, Fig. 4 upper panel | Crop x=340, y=505, width=1210, height=454. Preference-learning example; each utility is normalized by its own peak. The highlighted good-design region uses an 80% threshold. |
| `images/research/strom-trajectories.png` | [arXiv:2406.05846](https://arxiv.org/pdf/2406.05846#page=16), PDF page 16, Fig. 5 bottom panels | Crop x=395, y=592, width=1100, height=250. Three car back-in trajectories; successive poses are colored along the paths. The accompanying less-than-1% certified suboptimality statement is reported for the paper’s five trajectory benchmarks. |

- **PINS:** “up to 73×” is the reported inner-solver comparison against Sinkhorn using the same entropic proximal-point outer loop and matched accuracy (Table 2, synthetic and augmented-MNIST experiments). The largest ratio comes from the augmented-MNIST setting: 3,793.2 seconds versus 51.74 seconds. These are reported measurements, not new benchmarks run for the website.
- **OptimAI:** 88.1% NLP4LP accuracy uses GPT-4o with o1-mini as planner; 82.3% overall Optibench accuracy uses DeepSeek-R1. Both are zero-shot results; see Table 3 and Section 4.2. The two displayed values use different model configurations.

## Maintenance

The page remains static HTML and uses a page-specific stylesheet, `assets/css/research.css`. Keep internal page links explicit (`index.html`) so direct local opening works. Legacy `#research`, `#preprints`, and `#publications` links resolve to the research overview. The former six topic anchors resolve to their corresponding merged sections. Each theme has one core introduction and one paper figure; the PINS and OptimAI results use compact supporting callouts. Within each theme, entries are ordered by the year displayed in their citation, independently of publication status. Add a new paper once under its primary theme and update the topic count; remove its `Preprint` badge when it is accepted or published. Bibliographic metadata on the page was retained from the existing website rather than reclassified from arXiv submission dates.
