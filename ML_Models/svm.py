import numpy as np
from cvxopt import matrix, spmatrix
from cvxopt.solvers import qp
from cvxopt import solvers

class LinearSVM():
	def __init__(self, C):
		self.C = C

	def fit(self, data, labels):
		K = data * labels[:, np.newaxis]
		K = np.dot(K, K.T)
		N = data.shape[1]

		solvers.options['show_progress'] = False
		sol = qp(matrix(K), matrix(-np.ones((N, 1))), matrix(np.vstack((np.eye(N), -np.eye(N)))), 
			matrix(np.vstack((np.ones((N, 1)) * self.C, np.zeros((N, 1))))), 
			matrix(labels.reshape(1, N)), matrix(np.zeros(1)))

		self.alpha = np.array(sol['x']).reshape(N)

		self.support_ = [i for i in xrange(N) if self.alpha[i] > 1e-3]
		self.w = (data * (self.alpha * labels)[:, np.newaxis]).sum(axis=0)
		for i in xrange(N):
			if 0 < self.alpha[i] < self.C:
				self.bias = labels[i] - np.dot(self.w, data[i])
				break

	def predict(self, data):
		if len(data.shape) <= 1:
			self.predict(data.reshape(1, data.shape[0]))

		return np.sign(np.dot(data, self.w) + self.bias)

	def decision_function(self, data):
		return (np.dot(data, self.w) + self.bias) / np.linalg.norm(self.w)

	def score(self, data, labels):
		pr = self.predict(data)
		correct = 0.
		N = len(data)
		for i in xrange(N):
			correct += 1 if pr[i] * labels[i] > 0 else 0
		return correct / N